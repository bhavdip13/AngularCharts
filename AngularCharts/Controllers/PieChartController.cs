using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/PieChart")]
    public class PieChartController : Controller
    {
        [HttpGet("[action]")]
        public WorldPopulation GetPopulationData()
        {
            WorldPopulation population = new WorldPopulation {
                Countries = new string[] { "China", "India", "USA", "Indonesia", "Brazil", "Other" },
                Population = new long[] { 1_376_745_728, 1_296_834_048, 331_026_400, 262_936_096, 218_622_304, 3_997_059_073 } };
            return population;
        }
    }

    public class WorldPopulation
    {
        public string[] Countries { get; set; }
        public long[] Population { get; set; }
    }
}