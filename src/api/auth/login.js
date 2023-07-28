import supabase from "../supabaseClient";

export const login = async ({ email, password }) => {
  console.log(email, password);
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message, error.status);

  return data;
};
