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
import { Mail, Phone, MapPin, Clock } from "lucide-react";


const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 98765-4321",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contato@psicologo.com",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua das Flores, 123, São Paulo, SP",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta, 9h às 18h",
  },
];

const Contact = () => {
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
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 98765-4321"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <TextArea
                      id="message"
                      placeholder="Como posso ajudar você?"
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-teal-600" />
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

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <h3 className="text-lg mb-2 text-teal-900">Atendimento Online</h3>
              <p className="text-teal-700">
                Também ofereço sessões por videochamada para sua comodidade e
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
