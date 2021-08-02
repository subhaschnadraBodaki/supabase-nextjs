import { supabase } from "../../utils/supabaseClient";

export default async function getUser(req, res) {
  const user = await supabase.auth.user();
  const session = await supabase.auth.session();
  return res.status(200).json({ user: user, session: session });
}
