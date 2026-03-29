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
import { Mail, Phone, Clock } from "lucide-react";
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

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Erro ao enviar mensagem");
    }
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
            Entre em Contato
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estou aqui para ajudar você. Entre em contato para agendar sua
            primeira consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e retornarei em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <Label
                      htmlFor="message"
                      className="min-w-[120px] pt-2 text-sm font-medium"
                    >
                      Mensagem
                    </Label>

                    <TextArea
                      id="message"
                      placeholder="Como posso ajudar você?"
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="flex-1 min-h-[150px] rounded-md border px-3 py-2 resize-y border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 "
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              return (
                <Card key={index}>
                  <CardContent>
                    <div className="flex items-start gap-4 p-1">
                      <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-stone-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-slate-900">{info.title}</h3>
                        <p className="text-slate-600">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
              <h3 className="text-lg mb-2 text-stone-900">
                Atendimento Online
              </h3>
              <p className="text-stone-700">
                Sessões realizadas por videochamada para sua comodidade e
                segurança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
