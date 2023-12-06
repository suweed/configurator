import { chairColors, useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const { material, setMaterial, legs, setLegs, chairColor, setChairColor } = useCustomization();
    return <div className="configurator">
        <div className="configurator__section">
            <div className="configurator__section_title">
                Material
            </div>
            <div className="configurator__section_values">
                <div
                    className={`item ${material === 'piel' ? 'item--active' : ''}`}
                    onClick={() => setMaterial('piel')}
                >
                    Piel
                </div>
                <div
                    className={`item ${material === 'tela' ? 'item--active' : ''}`}
                    onClick={() => setMaterial('tela')}
                >
                    Tela
                </div>
                <div
                    className={`item ${material === 'plastico' ? 'item--active' : ''}`}
                    onClick={() => setMaterial('plastico')}
                >
                    Plastico
                </div>
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section_title">
                Patas
            </div>
            <div className="configurator__section_values">
                <div
                    className={`item ${legs === 1 ? 'item--active' : ''}`}
                    onClick={() => setLegs(1)}
                >
                    tipo1
                </div>
                <div
                    className={`item ${legs === 2 ? 'item--active' : ''}`}
                    onClick={() => setLegs(2)}
                >
                    tipo2
                </div>
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section_title">
                Color
            </div>
            <div className="configurator__section_values values-colors">
                {
                    chairColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item item-color ${item.color === chairColor.color ? 'item--active' : ''}`}
                            onClick={() => setChairColor(item)}
                        >
                            <div
                                className="item__dot"
                                style={{
                                    backgroundColor: item.color
                                }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>;
}

export default Configurator;