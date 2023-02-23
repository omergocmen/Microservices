using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<ApiResource> ApiResources => new ApiResource[]
        {
            new ApiResource("resource_catalog"){Scopes={ "catalog_fullpermission" } },
            new ApiResource("resource_photo_stock"){Scopes={ "photo_stock_fullpermission" } },
            new ApiResource("resource_basket"){Scopes={ "basket_fullpermission" } },
            new ApiResource("resource_discount"){Scopes={ "discount_fullpermission" } },
            new ApiResource("resource_order"){Scopes={ "order_fullpermission" } },
            new ApiResource("resource_payment"){Scopes={ "payment_fullpermission" } },
            new ApiResource("resource_gateway"){Scopes={ "gateway_fullpermission" } },
            new ApiResource(IdentityServerConstants.LocalApi.ScopeName)
        };
        public static IEnumerable<IdentityResource> IdentityResources =>
                   new IdentityResource[]
                   {
                       new IdentityResources.Email(),
                       new IdentityResources.OpenId(),
                       new IdentityResources.Profile(),
                       new IdentityResource(){Name="Roles",DisplayName="Roles",Description="Kullanıcı Rolleri",UserClaims=new []{ "role" } },
                   };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("catalog_fullpermission","Catalog Api için full erişim"),
                new ApiScope("photo_stock_fullpermission","Photo Stock Api için full erişim"),
                new ApiScope("basket_fullpermission","Basket Api için full erişim"),
                new ApiScope("discount_fullpermission","Discount Api için full erişim"),
                new ApiScope("order_fullpermission","Order Api için full erişim"),
                new ApiScope("payment_fullpermission","Payment Api için full erişim"),
                new ApiScope("gateway_fullpermission","Gateway Api için full erişim"),
                new ApiScope(IdentityServerConstants.LocalApi.ScopeName),
            };

        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                new Client
                {
                    ClientId="WebMvcClient",
                    ClientName="ASP.Net Core Mvc",
                    ClientSecrets={new Secret ("secret".Sha256())},
                    AllowedGrantTypes=GrantTypes.ClientCredentials,
                    AllowedScopes={ "catalog_fullpermission", "photo_stock_fullpermission", "gateway_fullpermission", IdentityServerConstants.LocalApi.ScopeName }
                },
                new Client
                {
                    ClientId="WebMvcClientForUser",
                    ClientName="ASP.Net Core Mvc",
                    AllowOfflineAccess=true,
                    ClientSecrets={new Secret ("secret".Sha256())},
                    AllowedGrantTypes=GrantTypes.ResourceOwnerPassword,
                    AllowedScopes={"basket_fullpermission","discount_fullpermission"
                        ,"payment_fullpermission","order_fullpermission","gateway_fullpermission",IdentityServerConstants.StandardScopes.Email, IdentityServerConstants.StandardScopes.OfflineAccess,
                    IdentityServerConstants.StandardScopes.OpenId,IdentityServerConstants.StandardScopes.Profile,
                    IdentityServerConstants.LocalApi.ScopeName,"roles"},
                    AccessTokenLifetime=2*60*60,
                    RefreshTokenExpiration=TokenExpiration.Absolute,
                    AbsoluteRefreshTokenLifetime=(int)(DateTime.Now.AddDays(60)-DateTime.Now).TotalSeconds,
                    RefreshTokenUsage=TokenUsage.ReUse
                }
            };
    }
}