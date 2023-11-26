import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';
import VisualizerConfigurator from './components/VisualizerConfigurator';

function ProductView() {
    return (
        <>
            <div className="product-view-container bg-white">
                <div className="header-page"></div>
                <div className="menu-page hidden lg:flex">
                    <div className="menu-item">Sillas</div>
                    <div className="menu-item">Mesas</div>
                    <div className="menu-item">Escritorios</div>
                    <div className="menu-item">catetoria</div>
                    <div className="menu-item">catetoria</div>
                </div>
                <div className="content-page">
                    <div className="section-breadcrumbs">
                        categoria / categoria / categoria
                    </div>
                    <CustomizationProvider>
                        <div className="section-info-media lg:flex flex-row flex-nowrap justify-center">
                            <div className="gallery-content w-full lg:w-3/6">

                                <VisualizerConfigurator />
                                
                            </div>
                            <div className="info-content w-full lg:w-3/6 pl-4">
                                <div className="product-description">
                                    <div className="product-name">
                                    Mesas de centro Cuvier - Azul
                                    </div>
                                    <div className="product-price">
                                        <span className="old-price">$5.599</span>
                                        <span className="new-price">$3.599</span>
                                    </div>
                                </div>
                                <div className="product-actions">
                                    <Configurator />
                                </div>
                                <div className="content-add-btn">
                                    <div className="setup-qty">
                                        <button>-</button>
                                        <p>1</p>
                                        <button>+</button>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CustomizationProvider>
                </div>
                <div className="footer-page"></div>
            </div>
        </>
    );
}

export default ProductView;