import { FolderForm } from "@/components/Forms/FolderForm";
import AllFolders from "@/components/global/AllFolders";
import { Modal } from "@/components/global/Modal";

export default function Portfolio() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Din portfolio</h1>

        <Modal title="Skapa ny katalog" description="Fyll i detaljer för din katalog" btnText="Skapa Katalog">
          <FolderForm />
        </Modal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <AllFolders />
      </div>
    </div>
  );
}
