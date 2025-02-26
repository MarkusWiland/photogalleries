

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  btnText:string;
  children: React.ReactNode;
}

export function Modal({title, description, btnText, children}: ModalProps) {

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className="btn">{btnText}</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        {description}
      </DialogDescription>
      <div>{children}</div>
  
    </DialogContent>
  </Dialog>
  )
}