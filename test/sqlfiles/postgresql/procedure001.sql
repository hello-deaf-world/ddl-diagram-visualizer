CREATE OR REPLACE FUNCTION procedure001 () RETURNS VOID AS $$
DECLARE
  q TEXT;
BEGIN
q := '
INSERT INTO table002 (
  text_002_01,
  date_002_01,
  sum_002_01
)
SELECT
  text_001_01,
  date_001_01,
  SUM(int_001_01) AS sum
FROM table001
WHERE 1=1
  AND date_001_01 BETWEEN ''20240501'' AND ''20240505''
GROUP BY
  text_001_01,
  date_001_01
;';
EXECUTE q;
END;
$$ LANGUAGE 'plpgsql';
