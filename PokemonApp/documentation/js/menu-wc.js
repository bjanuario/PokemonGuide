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
                    <a href="index.html" data-type="index-link">pokemon-app documentation</a>
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
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ApiModule-899b3fcab7127f5f3844d5bee975b0dc"' : 'data-target="#xs-injectables-links-module-ApiModule-899b3fcab7127f5f3844d5bee975b0dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiModule-899b3fcab7127f5f3844d5bee975b0dc"' :
                                        'id="xs-injectables-links-module-ApiModule-899b3fcab7127f5f3844d5bee975b0dc"' }>
                                        <li class="link">
                                            <a href="injectables/ApiConfiguration.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ApiConfiguration</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PingControllerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PingControllerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PokemonControllerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PokemonControllerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a11064b08307f4005c6c11a154154bdc"' : 'data-target="#xs-components-links-module-AppModule-a11064b08307f4005c6c11a154154bdc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a11064b08307f4005c6c11a154154bdc"' :
                                            'id="xs-components-links-module-AppModule-a11064b08307f4005c6c11a154154bdc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PokemonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PokemonsComponent</a>
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
                                <a href="classes/HeaderParameter.html" data-type="entity-link">HeaderParameter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Parameter.html" data-type="entity-link">Parameter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParameterCodec.html" data-type="entity-link">ParameterCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/PathParameter.html" data-type="entity-link">PathParameter</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryParameter.html" data-type="entity-link">QueryParameter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestBuilder.html" data-type="entity-link">RequestBuilder</a>
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
                                    <a href="injectables/ApiService.html" data-type="entity-link">ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link">BaseService</a>
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
                                <a href="interfaces/ApiConfigurationParams.html" data-type="entity-link">ApiConfigurationParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Count.html" data-type="entity-link">Count</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NewPokemon.html" data-type="entity-link">NewPokemon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParameterOptions.html" data-type="entity-link">ParameterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PingResponse.html" data-type="entity-link">PingResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pokemon.html" data-type="entity-link">Pokemon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonPartial.html" data-type="entity-link">PokemonPartial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonWithRelations.html" data-type="entity-link">PokemonWithRelations</a>
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