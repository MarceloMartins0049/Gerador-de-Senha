using Microsoft.AspNetCore.Mvc;

namespace GeradorSenhaMVC.Controllers
{
    public class SobreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
