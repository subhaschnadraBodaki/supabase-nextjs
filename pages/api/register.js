import { supabase } from "../../utils/supabaseClient";
import pool from "../../utils/DB";

export default async function registerUser(req, res) {
  const addRole = "Update auth.users set role = $2 where email = $1";
  const { role, email, password } = req.body;
  console.log(role);
  let { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  console.log({ error });
  console.log({ user });
  if (error) return res.status(401).json({ error: error.message });

  const result = await pool.query(addRole, [email, role]);

  return res.status(200).json({ user: user });
}
