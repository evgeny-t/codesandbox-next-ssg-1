import { writeJsonSync } from "fs-extra";

writeJsonSync(
  "./data.json",
  [
    {
      slug: "first-post",
      title: "В ноябре месяце 1805",
      text:
        "В ноябре месяце 1805 года князь Василий должен ехать на ревизию в четыре губернии. Он устроил для себя это назначение, с тем чтобы побывать заодно в своих расстроенных имениях и, захватив с собой (в месте расположения его полка) сына Анатоля, с ним вместе заехать к князю Николаю Андреевичу Болконскому, с тем чтобы женить сына на дочери этого богатого старика.",
    },
    {
      slug: "seconf-post",
      title: "ехать на ревизию в четыре губернии",
      text: "ехать на ревизию в четыре губернии",
    },
  ],
  { spaces: 1 }
);
