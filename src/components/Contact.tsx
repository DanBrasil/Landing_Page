"use client";

import Button from "@/components_standard/button";
import { Card, CardHeader } from "@/components_standard/Card";
import {
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components_standard/Card/Card";
import Input from "@/components_standard/input";
import { Label } from "@/components_standard/Label";
import { TextArea } from "@/components_standard/TextArea";
import { Mail, Phone, Clock, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 96587-1150",
  },
  {
    icon: Mail,
    title: "Email",
    content: "nathalybruza@hotmail.com",
  },

  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta, 9h às 18h",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!form.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <section className="relative py-12 sm:py-16 md:py-20 pb-16 sm:pb-20 md:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-slate-900 font-bold">
            Entre em Contato
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
            Estou aqui para ajudar você. Entre em contato para agendar sua
            primeira consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="shadow-lg border-stone-300">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Preencha o formulário e retornarei em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-5 sm:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="space-y-2.5">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-stone-900"
                    >
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) {
                          setErrors({ ...errors, name: undefined });
                        }
                      }}
                      className={`w-full h-11 sm:h-12 px-4 text-sm sm:text-base rounded-lg border-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                        errors.name ? "border-red-300" : "border-stone-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 flex items-center gap-1 mt-1.5">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-stone-900"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) {
                          setErrors({ ...errors, email: undefined });
                        }
                      }}
                      className={`w-full h-11 sm:h-12 px-4 text-sm sm:text-base rounded-lg border-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                        errors.email ? "border-red-300" : "border-stone-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 flex items-center gap-1 mt-1.5">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-stone-900"
                    >
                      Telefone{" "}
                      <span className="text-stone-500 font-normal">
                        (opcional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full h-11 sm:h-12 px-4 text-sm sm:text-base rounded-lg border-2 border-stone-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-stone-900"
                    >
                      Mensagem
                    </Label>

                    <div className="space-y-2">
                      <TextArea
                        id="message"
                        placeholder="Conte-me como posso ajudar você..."
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) {
                            setErrors({ ...errors, message: undefined });
                          }
                        }}
                        className={`w-full min-h-[130px] sm:min-h-[160px] rounded-lg border-2 px-4 py-3 text-sm sm:text-base resize-y focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all ${
                          errors.message ? "border-red-300" : "border-stone-300"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 flex items-center gap-1 mt-1.5">
                          <span>⚠</span> {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 sm:h-13 text-base sm:text-lg font-semibold bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                  </Button>

                  {status === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-300 rounded-lg text-green-800 animate-in fade-in slide-in-from-top-2 duration-300">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Mensagem enviada com sucesso! Retornarei em breve.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-800 animate-in fade-in slide-in-from-top-2 duration-300">
                      <XCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Erro ao enviar mensagem. Tente novamente mais tarde.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-5 w-full">
            {contactInfo.map((info, index) => {
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-default border-stone-300"
                >
                  <CardContent>
                    <div className="flex items-center gap-4 sm:gap-5 p-2 sm:p-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1 text-sm sm:text-base font-bold text-stone-900">
                          {info.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 break-words font-medium">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="bg-gradient-to-br from-teal-50 to-stone-50 rounded-xl p-5 sm:p-6 border-2 border-teal-200 shadow-md">
              <h3 className="text-base sm:text-lg mb-2 font-bold text-stone-900 flex items-center gap-2">
                <span className="text-teal-600">💻</span> Atendimento Online
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Sessões realizadas por videochamada para sua comodidade e
                segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clear-both"></div>
    </section>
  );
};

export default Contact;
