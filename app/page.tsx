import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies});
  const {data:lessons} = await supabase.from("lesson").select("*");

  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {lessons?.map(lesson => {
          return(
            <Link href={`/${lesson.id}`} key={lesson.id}>
              {lesson.title}
            </Link>
          )
        })}
      </main>
  );
}
