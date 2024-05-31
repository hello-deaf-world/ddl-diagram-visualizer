CREATE OR REPLACE FUNCTION procedure002 (
  dt TEXT
) RETURNS VOID AS $$
DECLARE
  target_dt DATE;
  q TEXT;
BEGIN
target_dt := dt::DATE - INTERVAL '30 day';
q := '
INSERT INTO table004 (
  text_004_01,
  date_004_01,
  int_004_01
)
SELECT
  text_003_01,
  ''' || target_dt || '''::DATE,
  int_001_01
FROM table003 a
LEFT OUTER JOIN (
  SELECT
    *
  FROM table001
)aa ON 1=1
  AND a.text_003_01 = aa.text_001_01
;';
EXECUTE q;
END;
$$ LANGUAGE 'plpgsql';
