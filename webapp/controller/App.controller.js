// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("de.oge.fioristarterpack.zjte_training.controller.App", {
			onInit: function () {   
                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView1", {});
            }
		});
	});