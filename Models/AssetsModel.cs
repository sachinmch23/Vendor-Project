using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vendorapp.Models
{
    public class AssetsModel
    {
        public int AssetsId {  get; set; }
        public string Name { get; set; }
        public string ChangePerDay { get; set; }
        public string Description {  get; set; }
        public string Date {  get; set; }
    }
}