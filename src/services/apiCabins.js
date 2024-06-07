import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) console.log(error);
  return data;
}
export async function deleteRowsById(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
}
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) throw new Error(error.message);
  return data;
}
