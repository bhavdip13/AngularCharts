using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Enum;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/BarChart")]
    public class BarChartController : Controller
    {

        //[HttpGet("[action]")]
        //public Weather GetBarChartData()
        //{

        //    var dict = new Dictionary<string, int[]>();

        //    dict.Add("New Delhi",new int[] { 6, 19, 6, 21, 7, 21, 8 });
        //    dict.Add("New York", new int[] { -8, -6, -1, 2, -7, 6, 4 });

        //    var tempratutes = new List<CityWeather>();
        //    tempratutes.Add(new CityWeather { Temprature = new int[] { 6, 19, 6, 21, 7, 21, 8 }, CityName = "New Delhi" });
        //    tempratutes.Add(new CityWeather { Temprature = new int[] { -8, -6, -1, 2, -7, 6, 4 }, CityName = "New York" });

        //    List<string> days = new List<string>();

        //    foreach (DayOfWeek day in GetValues(typeof(DayOfWeek)))
        //    {
        //        if (day == DayOfWeek.Wednesday)
        //        {
        //            days.Add(day + " (Lowest)");
        //            break;
        //        }
        //        days.AddRange(new string[] { day + " (Lowest)", day + " (Highest)" });
        //    }

        //    return new Weather { CitiesWeather = citiesWeather, Days = days.ToArray() };

        //}


        [HttpGet("[action]")]
        public Weather GetChartData()
        {

            var citiesWeather = new List<CityWeather>();
            citiesWeather.Add(new CityWeather { CityName = "New Delhi", Temprature = new int[] { 6, 19, 6, 21, 7, 21, 8 } });
            citiesWeather.Add(new CityWeather { CityName = "New York", Temprature = new int[] { -8, -6, -1, 2, -7, 6, 4 } });

            List<string> days = new List<string>();

            foreach (DayOfWeek day in GetValues(typeof(DayOfWeek)))
            {
                if (day == DayOfWeek.Wednesday)
                {
                    days.Add($"{day} (Lowest)");
                    break;
                }
                days.AddRange(new string[] { $"{day} (Lowest)", $"{day} (Highest)" });
            }

            return new Weather { CitiesWeather = citiesWeather, Days = days.ToArray() };

        }
    }


    public class CityWeather
    {
        public int[] Temprature { get; set; }
        public string CityName { get; set; }
    }

    public class Weather
    {
        public List<CityWeather> CitiesWeather { get; set; }
        public string[] Days { get; set; }
    }


    public class WeatherForecast
    {
        public string DateFormatted { get; set; }
        public int TemperatureC { get; set; }
        public string Summary { get; set; }

        public int TemperatureF
        {
            get
            {
                return 32 + (int)(TemperatureC / 0.5556);
            }
        }
    }
}