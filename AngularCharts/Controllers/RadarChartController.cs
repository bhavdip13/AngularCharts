using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/RadarChart")]
    public class RadarChartController : Controller
    {
        [HttpGet("[action]")]
        public RadarChartData GetRadarChartData()
        {
            List<ChartData> data = new List<ChartData>();
            data.Add(new ChartData { Data = new decimal[] { 18.5m, 17.9m, 4.3m, 3.5m, 2.8m }, Label = "Population %" });
            data.Add(new ChartData { Data = new decimal[] { 15.1m, 3.15m, 24.9m, 1.31m, 2.75m }, Label = "GDP Nominal %" });
            string[] Countries = { "China", "India", "USA", "Indonesia", "Brazil" };
            return new RadarChartData { ChartData = data, ChartLabels = Countries, ChartType = "radar" };
        }
    }

    public class ChartData
    {
        public decimal[] Data { get; set; }
        public string Label { get; set; }
    }

    public class RadarChartData
    {
        public List<ChartData> ChartData { get; set; }
        public string[] ChartLabels { get; set; }
        public string ChartType { get; set; }
    }
}