NDSummary.OnToolTipsLoaded("File:Value.h",{7028:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7028\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Value</div></div></div><div class=\"TTSummary\">Represents a single value that can be stored/accessed in multiple ways.</div></div>",7030:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7030\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName last\">type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a Value object</div></div>",7031:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7031\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint16.</div></div>",7032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7032\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value UINT32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a uint32.</div></div>",7033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7033\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Value FLOAT(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static helper function for making a Value object from a float.</div></div>",7035:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7035\" class=\"NDPrototype NoParameterForm\">anyType m_value</div><div class=\"TTSummary\">Holds the actual value as an anyType</div></div>",7036:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7036\" class=\"NDPrototype NoParameterForm\">ValueType m_storedAs</div><div class=\"TTSummary\">The type that the value is stored as.&nbsp; This type should be inspected to determine how to read the m_value member</div></div>",7038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7038\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ValueType storedAs() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ValueType that the data value is stored as. This type should be inspected to determine how to read the data value.</div></div>",7039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7039\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> as_float() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte float</div></div>",7040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7040\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual double</span> as_double() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as an 8-byte double</div></div>",7041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7041\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> as_uint8() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 1-byte unsigned integer</div></div>",7042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7042\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> as_uint16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte unsigned integer</div></div>",7043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7043\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> as_uint32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte unsigned integer</div></div>",7044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7044\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual short</span> as_int16() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 2-byte signed integer</div></div>",7045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7045\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual int</span> as_int32() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a 4-byte signed integer</div></div>",7046:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the data value as a 1-byte boolean</div></div>",7047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7047\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ChannelMask as_ChannelMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a ChannelMask object.</div></div>",7048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7048\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> as_string() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the data value as a string</div></div>"});