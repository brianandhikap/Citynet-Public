import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormFields } from './registration/FormFields';
import { LocationMap } from './registration/LocationMap';
import { sendToTelegram } from '@/lib/telegram';

const formSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap harus diisi"),
  whatsapp: z.string().min(10, "Nomor WhatsApp tidak valid"),
  package: z.string().min(1, "Pilih paket internet"),
  source: z.string().optional(),
  location: z.string(),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui perjanjian",
  }),
});

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsapp: "",
      package: "",
      source: "",
      location: "",
      agreement: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const success = await sendToTelegram(values);
      if (success) {
        toast({
          title: "Berhasil",
          description: "Formulir pendaftaran telah terkirim",
        });
        onOpenChange(false);
      } else {
        toast({
          title: "Error",
          description: "Gagal mengirim formulir. Silakan coba lagi.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            Formulir Pemasangan Citynet
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFields form={form} />
            <LocationMap form={form} />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreement"
                checked={form.watch("agreement")}
                onCheckedChange={(checked) => 
                  form.setValue("agreement", checked as boolean)
                }
              />
              <label htmlFor="agreement" className="text-sm">
                Saya setuju dengan perjanjian pemasangan Citynet
              </label>
            </div>
            {form.formState.errors.agreement && (
              <p className="text-sm text-red-500">
                {form.formState.errors.agreement.message}
              </p>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};