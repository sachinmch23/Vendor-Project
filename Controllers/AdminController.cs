using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using Vendorapp.Models;

namespace Vendorapp.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Dashboard()
        {
            return View();
        }
        public ActionResult Assets()
        {
            return View();
        }
        AssetsDBDataContext dataContext = new AssetsDBDataContext();

        public JsonResult SaveAssets(AssetsModel model)
        {
            Assets_Table asset = null;
            if (model.AssetsId == 0)
            {
                asset = new Assets_Table();
            }
            else
                asset = dataContext.Assets_Tables.Where(x => x.AssetsId == model.AssetsId).FirstOrDefault();
            asset.Date = model.Date;
            asset.Description = model.Description;
            asset.ChangePerDay = model.ChangePerDay;
            asset.Name = model.Name;

            if(model.AssetsId == 0)
            {
                asset.EntryDate = DateTime.Now;
                dataContext.Assets_Tables.InsertOnSubmit(asset);
            }
            dataContext.SubmitChanges();
            return Json(new { Message = "Success" }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetAssetsList()
        {
            var List = dataContext.Assets_Tables.ToList();
            return Json(new {Message="Success", AssetsList = List},JsonRequestBehavior.AllowGet);
        }
        public JsonResult DeleteAssets(int id)
        {
            var assets = dataContext.Assets_Tables.Where(x => x.AssetsId ==id).FirstOrDefault();

            dataContext.Assets_Tables.DeleteOnSubmit(assets);
            dataContext.SubmitChanges();
            return Json(new {Message="Success"},JsonRequestBehavior.AllowGet);
        }
    }
}