'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
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

export default function Portfolio() {
  const [loading, setLoading] = useState(false)

  async function handleCreateFolder() {
    setLoading(true)
    try {
      await createFolder()
   
    } catch (error) {
      console.error(error)
      alert('Misslyckades att skapa folder')
    } finally {
      setLoading(false)
    }
  }
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
                <Button onClick={handleCreateFolder}>skapa</Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log('Files: ', res)
            alert('Upload Completed')
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`)
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="flex flex-col space-y-2 ">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col space-y-2">
          <CardHeader>
            <CardTitle className="uppercase text-lg font-semibold">
              Sport
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>bilder</div>
            <p className="text-muted-foreground text-sm text-balance">
              Totalt <span className="font-bold">34</span> bilder i denna
              katalog
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
