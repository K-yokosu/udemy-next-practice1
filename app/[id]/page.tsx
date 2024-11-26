import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerComponentClient({ cookies});

const getDetailLesson = async (id: number) => {
  const {data:lessons} = await supabase.from("lesson").select("*").eq("id",id).single();
  return lessons;
}


export const LessonDetailPage = async ({params}: {params: {id: number}}) => {
    const lesson = await getDetailLesson(params.id);
    console.log(lesson);

    return (
        <div>LessonDetailPage</div>
    )
}
export default LessonDetailPage;