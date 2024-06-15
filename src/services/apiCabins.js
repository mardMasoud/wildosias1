import supabase, { supabaseUrl } from "./supabase";

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
//https://hpvlnzfuuzxwhxhehbbf.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg?t=2024-06-13T12%3A38%3A42.136Z
export async function createCabin(newCabin) {
  const file = newCabin.image[0];
  const imageName = `${Math.random()}-${file.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  const { error: errorUpload } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, file);
  if (errorUpload) {
    const { error, data } = await supabase.from("cabins").delete().eq("id", id);
    if (error) throw new Error(error.message);
    return data;
  }
  if (error) throw new Error(error.message);
  return data;
}


export async function editCabin(){

const { data, error } = await supabase
  .from('cabins')
  .update({ other_column: 'otherValue' })
  .eq('some_column', 'someValue')
  .select()
          
}