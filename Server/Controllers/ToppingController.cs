using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ToppingController : ControllerBase
{
    public static readonly IFirebaseConfig Config = new FirebaseConfig
    {
        AuthSecret= "XKPi081r8gonlBqFIipMQ7gcCKDjsoEQCA9MbdJC", 
        BasePath = "https://ebusiness-23ad0-default-rtdb.europe-west1.firebasedatabase.app"
    };
    IFirebaseClient client;
    
    [HttpGet(Name = "GetToppings")]
    public IEnumerable<Topping>? Get()
    {
        client = new FireSharp.FirebaseClient(Config);
        var response = client.Get("Toppings");
        var data = JsonConvert.DeserializeObject<Topping[]>(response.Body);
        return data;
    }
}