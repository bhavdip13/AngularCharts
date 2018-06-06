using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/ScatterChart")]
    public class ScatterChartController : Controller
    {
        [HttpGet("[action]")]
        public Scatter[] GetScatterChartData()
        {
            List<Scatter> scatterList = new List<Scatter>();
            var rng = new Random();
            for (int i = 1; i <= 5; i++)
            {
                List<ScatterData> scatterDataList = new List<ScatterData>();
                for (int j = 1; j <= 5; j++)
                {
                    scatterDataList.Add(new ScatterData { X = rng.Next(-20, 55), Y = rng.Next(-20, 55) });
                }
                scatterList.Add(new Scatter { Data = scatterDataList, Label = $"DataSet {i:00}" });
            }
            return scatterList.ToArray();
        }
    }

    public class Scatter
    {
        public List<ScatterData> Data { get; set; }
        public string Label { get; set; }
    }
    public class ScatterData
    {
        public int X { get; set; }
        public int Y { get; set; }
    }
}