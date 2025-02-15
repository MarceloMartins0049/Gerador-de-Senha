using Microsoft.AspNetCore.Mvc;

namespace GeradorSenhas.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
