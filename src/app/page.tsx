import Button from "@/components/Button";
import TextInput from "@/components/input/TextInput";
import { KeyIcon, UserIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <main className="mx-40 h-screen pt-20">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold">Component Collection</h1>
      </div>
      <div className="p-8">
        <div className="flex w-80 flex-col gap-4 rounded-3xl bg-white p-4">
          <TextInput text="Username" icon={<UserIcon />} />
          <TextInput text="Password" icon={<KeyIcon />} />
          <Button />
        </div>
      </div>
    </main>
  );
}
