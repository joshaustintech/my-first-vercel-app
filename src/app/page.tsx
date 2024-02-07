import Image from "next/image";

export default async function Home() {

  //const appId: string | undefined = process.env.META_APP_ID

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My First Vercel App</h1>
      <p>Can you find the JSON endpoint?</p>
    </main>
  );
}
