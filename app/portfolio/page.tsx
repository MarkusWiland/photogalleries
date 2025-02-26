import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { UploadButton } from '../utils/uploadthing'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { createFolder } from '../actions'
import AllFolders from '@/components/global/AllFolders'

export default function Portfolio() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">DIn portfolio</h1>
        <Dialog>
          <DialogTrigger>
            <Button variant="secondary">
              <Plus />
              Skapa katalog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
               
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <AllFolders />
      </div>
    </div>
  )
}
