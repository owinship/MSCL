NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/VehicleDynamicsMode.h",{267:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype267\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">VehicleDynamicsMode</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial VehicleDynamicsMode command.</div></div>",269:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype269\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",270:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype270\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> InertialTypes::</td><td class=\"PType\">VehicleModeType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">vehicleType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The VehicleModeType object to set.</div></div>",271:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype271\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> VehicleDynamicsMode MakeGetCommand()</div></div>",272:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype272\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> InertialTypes::VehicleModeType getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",273:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype273\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",274:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a VehicleDynamicsMode object.&nbsp; Use Make___Command methods to create an object.</div></div>",275:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype275\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",276:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype276\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",277:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype277\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",279:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype279\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",280:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype280\" class=\"NDPrototype NoParameterForm\">InertialTypes::VehicleModeType m_VehicleType</div><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});