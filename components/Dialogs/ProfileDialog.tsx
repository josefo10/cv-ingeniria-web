import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Button } from "../Button";
import { Dispatch, SetStateAction } from "react";

interface ProfileDialogProps {
  open: boolean;
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfileDialog = ({ open, setDialogOpen }: ProfileDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle className="bg-white">
        <span className="font-semibold">Más sobre mi:</span>
      </DialogTitle>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-2">
          <span>
            Estudiante de pregrado en Ingeniería de Sistemas de la Universidad de
            Antioquia, sede Medellín. Dado al servicio, excelentes relaciones
            interpersonales enfocado a producir resultados, responsable, alta
            confiabilidad, orientado a lograr objetivos en todas mis
            actividades. Cumplo con las labores y requerimientos que se me
            exigen, me motiva aprender nuevas cosas, soy receptivo en el aprendizaje de 
            nuevos conocimientos en cualquier ámbito.
          </span>
        </div>
      </DialogContent>

      <DialogTitle className="bg-white">
        <span className="font-semibold">Experiencia:</span>
      </DialogTitle>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Desarrollador Backend</span>
          <span className="font-semibold">
            IT Globers
          </span>
          <span>2022 - 2024</span>
          <span>
            Diseño soluciones de integraciones de e-commerce vtex, a través de 
            sistemasERP, CRM,pasarelas depago, entre otros. Manejo lenguajes, 
            JavaScript, TypeScript, Python, Java, bases dedatos SQL y NoSQL,
            Frameworks, VTEXIO, Nest.js, Angular, React entre otros.
            Trabajo sobre el marco de metodologías ágiles con herramientas, cambas, 
            Jira software, entre otras. En la actualidad, soy el líder de las 
            integraciones para el cambio de plataforma e-commerce de la tienda más 
            grande de Perú, Estilos.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Desarrollador Backend</span>
          <span className="font-semibold">
            Experimentality
          </span>
          <span>2021 - 2022</span>
          <span>
            Cumplí labores de desarrollo de software y manejo de clientes, crear 
            integraciones entre e-commerce y ERP utilizando node JS, JavaScript, SAP,
            uso de la plataforma Vtex, AZURE, Jira, Git.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Soporte Técnico</span>
          <span className="font-semibold">
            Facultad Nacional de Salud Pública
          </span>
          <span>2018 - 2020</span>
          <span>
            Cumplir funciones de soporte técnico a equipos de cómputo y servidores, 
            actividades de mantenimiento correctivo y preventivo de Software y
            Hardware.
          </span>
        </div>

        <div className="w-1/6">
          <Button
            text="Cerrar"
            type="secondary"
            handleClick={() => {
              setDialogOpen(false);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ProfileDialog };
