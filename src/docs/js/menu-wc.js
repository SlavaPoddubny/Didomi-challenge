'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">didomi-challenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-95fe106d0f71c66f208ee7e2022b18eb"' : 'data-target="#xs-components-links-module-AppModule-95fe106d0f71c66f208ee7e2022b18eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-95fe106d0f71c66f208ee7e2022b18eb"' :
                                            'id="xs-components-links-module-AppModule-95fe106d0f71c66f208ee7e2022b18eb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsentsModule.html" data-type="entity-link">ConsentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' : 'data-target="#xs-components-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' :
                                            'id="xs-components-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' }>
                                            <li class="link">
                                                <a href="components/ConsentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' : 'data-target="#xs-injectables-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' :
                                        'id="xs-injectables-links-module-ConsentsModule-9c536d28740bf3bd199742012c963aff"' }>
                                        <li class="link">
                                            <a href="injectables/ConsentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConsentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsentsRoutingModule.html" data-type="entity-link">ConsentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GiveConsentModule.html" data-type="entity-link">GiveConsentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' : 'data-target="#xs-components-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' :
                                            'id="xs-components-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' }>
                                            <li class="link">
                                                <a href="components/GiveConsentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GiveConsentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' : 'data-target="#xs-injectables-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' :
                                        'id="xs-injectables-links-module-GiveConsentModule-8156b360151612ced696e481408c5000"' }>
                                        <li class="link">
                                            <a href="injectables/ConsentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConsentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GiveConsentRoutingModule.html" data-type="entity-link">GiveConsentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-a19eca900abc7b9e319abf84a1cde797"' : 'data-target="#xs-components-links-module-MainModule-a19eca900abc7b9e319abf84a1cde797"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-a19eca900abc7b9e319abf84a1cde797"' :
                                            'id="xs-components-links-module-MainModule-a19eca900abc7b9e319abf84a1cde797"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link">MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerModule.html" data-type="entity-link">SpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpinnerModule-6eda6515c463505f36f687d504155d11"' : 'data-target="#xs-components-links-module-SpinnerModule-6eda6515c463505f36f687d504155d11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerModule-6eda6515c463505f36f687d504155d11"' :
                                            'id="xs-components-links-module-SpinnerModule-6eda6515c463505f36f687d504155d11"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToolbarModule.html" data-type="entity-link">ToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ToolbarModule-cecf8b62ac24040a741718766be04cbe"' : 'data-target="#xs-components-links-module-ToolbarModule-cecf8b62ac24040a741718766be04cbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ToolbarModule-cecf8b62ac24040a741718766be04cbe"' :
                                            'id="xs-components-links-module-ToolbarModule-cecf8b62ac24040a741718766be04cbe"' }>
                                            <li class="link">
                                                <a href="components/ToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Consent.html" data-type="entity-link">Consent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsentRead.html" data-type="entity-link">ConsentRead</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConsentWrite.html" data-type="entity-link">ConsentWrite</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNewConsent.html" data-type="entity-link">CreateNewConsent</a>
                            </li>
                            <li class="link">
                                <a href="classes/HideAfterModuleLoaded.html" data-type="entity-link">HideAfterModuleLoaded</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConsents.html" data-type="entity-link">LoadConsents</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConsentsFailed.html" data-type="entity-link">LoadConsentsFailed</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadConsentsSucceeded.html" data-type="entity-link">LoadConsentsSucceeded</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockStore.html" data-type="entity-link">MockStore</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveConsent.html" data-type="entity-link">RemoveConsent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShowOnModuleLoading.html" data-type="entity-link">ShowOnModuleLoading</a>
                            </li>
                            <li class="link">
                                <a href="classes/Unsubscriber.html" data-type="entity-link">Unsubscriber</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConsentsEffect.html" data-type="entity-link">ConsentsEffect</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsService.html" data-type="entity-link">ConsentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsentsServiceMock.html" data-type="entity-link">ConsentsServiceMock</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SpinnerInterceptor.html" data-type="entity-link">SpinnerInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ConsentsModuleStore.html" data-type="entity-link">ConsentsModuleStore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsentsState.html" data-type="entity-link">ConsentsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MockPrivate.html" data-type="entity-link">MockPrivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpinnerModuleStore.html" data-type="entity-link">SpinnerModuleStore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpinnerState.html" data-type="entity-link">SpinnerState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});