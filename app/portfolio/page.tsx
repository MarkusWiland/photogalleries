'use client'
import AllFolders from '@/components/global/AllFolders'
import { Modal } from '@/components/global/Modal'
import { Button } from '@/components/ui/button'
import { useStoreModal } from '@/hooks/use-store-modal'

export default function Portfolio() {

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">DIn portfolio</h1>

        <Modal title="he" description="hej" btnText='Skapa Katalog'>
          <Button>hej</Button>
        </Modal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
     
      </div>
    </div>
  )
}
