class population {
    constructor (ID_Nation, Nation, ID_Year, Year, Population, Slug_Nation) 
    {
        this.ID_Nation = ID_Nation;
        this.ID_Year = ID_Year;
        this.Nation = Nation;
        this.Year = Year;
        this.Population = Population;
        this.Slug_Nation = Slug_Nation;
    }
}


function reqListener() {
    const list = req.response;
    console.log(list);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  req.responseType = "json";
  req.send();

  