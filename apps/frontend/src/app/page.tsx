import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/pages/auth');
  return (
    <main>
    </main>
  );
}
