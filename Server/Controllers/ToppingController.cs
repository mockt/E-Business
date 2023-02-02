using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Server.Controllers;

public class ToppingController : ControllerBase
{
    IFirebaseConfig config = new FirebaseConfig
    {
        AuthSecret= "XKPi081r8gonlBqFIipMQ7gcCKDjsoEQCA9MbdJC", 
        BasePath = "https://ebusiness-23ad0-default-rtdb.europe-west1.firebasedatabase.app"
    };
    IFirebaseClient client;
    
    [HttpGet(Name = "GetToppings")]
    public IEnumerable<Topping> Get()
    {
        client = new FireSharp.FirebaseClient(config);
        var response = client.Get("Toppings");
        var data = JsonConvert.DeserializeObject<dynamic>(response.Body);
        return Array.Empty<Topping>();
    }
}