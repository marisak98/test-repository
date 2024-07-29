const { createClient } = require("@supabase/supabase-js");

const supabase = createClient("", "", {
  db: { schema: "bdscap_sd_test" },
});

module.exports = supabase;
