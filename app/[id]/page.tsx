import { createServerComponentClient, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";


const getDetailLesson = async (id: number, supabase: SupabaseClient) => {
  const {data:lessons} = await supabase.from("lesson").select("*").eq("id",id).single();
  return lessons;
}


export const LessonDetailPage = async ({params}: {params: {id: number}}) => {
    const supabase = createServerComponentClient<Database>({ cookies });
    const lesson = await getDetailLesson(params.id, supabase);
    console.log(lesson);

    return (
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">{lesson?.title}</h1>
            <p className="mb-8">{lesson?.description}</p>
        </div>
    )
}
export default LessonDetailPage;