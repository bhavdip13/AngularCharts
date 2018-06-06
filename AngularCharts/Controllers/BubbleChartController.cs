using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/BubbleChart")]
    public class BubbleChartController : Controller
    {
        [HttpGet("[action]")]
        public Bubble[] GetBubbleChartData()
        {
            List<Bubble> bubbleList = new List<Bubble>();

            var rng = new Random();
            for (int i = 1; i <= 5; i++)
            {
                List<BubbleData> bubbleDataList = new List<BubbleData>();
                for (int j = 1; j <= 5; j++)
                {
                    bubbleDataList.Add(new BubbleData { X = rng.Next(-20, 55), Y = rng.Next(-20, 55), R = rng.Next(2, 20) });
                }
                bubbleList.Add(new Bubble { Data = bubbleDataList, Label = $"DataSet {i:00}" });

            }

            return bubbleList.ToArray();
        }
    }

    public class BubbleData
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int R { get; set; }
    }

    public class Bubble
    {
        public List<BubbleData> Data { get; set; }
        public string Label { get; set; }
    }
}