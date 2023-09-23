"use client"
import { SystemGroupProps } from "./interfaces/systemGroup.interfaces"
import Card from "@molecules/card/Card" 
import Title from "@atoms/atoms/Title";


const grupo = [
  {
    id:"1",
    nombre:"Ges",
    subtitulo:"Pro",
    descripcion:"Sistema de Gestión Procesal",
    bg_image:"https://i.redd.it/b3esnz5ra34y.jpg"
  },
  {
    id:"2",
    nombre:"Sistemas",
    subtitulo:"Regionales",
    descripcion:"Otros Sistemas Regionales",
    bg_image:"https://images.unsplash.com/photo-1521080755838-d2311117f767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80"
  },

  {
    id:"3",
    subtitulo:"Sistemas",
    nombre:"Nacionales",
    descripcion:"Otros Sistemas Nacionales",
    bg_image:"https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id:"4",
   
    nombre:"Enlaces de",
    subtitulo:"interés",
    descripcion:"Otros enlaces de interés",
    bg_image:"https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];
const Items = [
  {
    title: "Dilgencias",
    description: "Sistema de Diligencias y documentación",
    icon: "sync_saved_locally",
    url:"http://172.17.25.110/diligencias/",
  
     
  },
  {
    title: "Carpetas",
    description: "Sistema de gestión de carpetas físicas",
    icon: "folder",
    url:"#",
    
  },
  {
    title: "Interconexión",
    description: "Registro de interconexión tribunales ",
    icon: "check_small",
    url:"#",
    
  },

  {
    title: "Comunicaciones",
    description: "Registro de comunicaciones a víctimas y testigos ",
    icon: "support_agent",
    url:"#",
    
  },
  {
    title: "Juicios Orales",
    description: "Agenda de Juicios Orales",
    icon: "gavel",
    url:"#",
   
  },
  {
    title: "Copia Carepta",
    description: "sistemade Gestión de carpetas virtuales",
    icon: "create_new_folder",
    url:"#",
 
  },
  {
    title: "Externialización Carepta",
    description: "Registro de carpetas externializadas",
    icon: "cloud_upload",
    url:"#",
 
  }
  
];
export default function Page({ params }: { params: { id: string } }) {

  const found = grupo.find(element => element.id == params.id);
  const titulo = found?.nombre;
  const subtitulo =found?.subtitulo;
  const backg_image = found?.bg_image;
  const descripcion = found?.descripcion;

  console.log(found?.nombre);
  const sistemas = Items.map((item) => {
    return Card({
      title:item.title,
      description:item.description,
      icon:item.icon,
      url:item.url,
      bg_image:""+backg_image
    })
  })


   

    return (
            
        <section className="absolute w-full h-full bg-gray-50">
      
   
          <Title title={""+titulo} subtitle={""+subtitulo} description={""+descripcion} /> 
        
          <div className="
          ml-40         
          mr-20
          flex
          flex-wrap
          flex-row
          flex-end
        
          ">
            {sistemas}
        
    
      </div>
      </section>

    )  
    
  }


/*
<Card{
      ...{
        title:"Carpetas",
        description:"sistema de Carpetas",
        icon:"sync_saved_locally",
        url:"hola",
        bg_image:"https://i.redd.it/b3esnz5ra34y.jpg"
      }
   } />
*/
//const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }) => {