NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/WirelessDataPoint.h",{4886:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4886\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessDataPoint</div></div></div><div class=\"TTSummary\">Represents a single channel\'s data point within a sweep</div></div>",4888:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4888\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName\">channelId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">channelNumber,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelProperties&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">channelProperties&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ChannelProperties()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a WirelessDataPoint object.&nbsp; The channel name will be automatically generated from the given channel id.</div></div>",4889:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4889\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessChannel::</td><td class=\"PType\">ChannelId&nbsp;</td><td></td><td class=\"PName\">channelId,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName\">channelNumber,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> Utils::</td><td class=\"PType\">Lazy&lt;std::<span class=\"SHKeyword\">string</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">channelName,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td></td><td class=\"PName\">type,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">anyType&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">value,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelProperties&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">channelProperties&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ChannelProperties()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds a WirelessDataPoint object.</div></div>",4891:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4891\" class=\"NDPrototype NoParameterForm\">WirelessChannel::ChannelId m_channelId</div><div class=\"TTSummary\">The WirelessChannel::ChannelId representing information about the channel this data point is associated with</div></div>",4892:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4892\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_channelNumber</div><div class=\"TTSummary\">The channel number associated with the data point (ch1 = 1, ch8 = 8).</div></div>",4893:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4893\" class=\"NDPrototype NoParameterForm\">mutable Utils::Lazy&lt;std::<span class=\"SHKeyword\">string</span>&gt; m_channelName</div><div class=\"TTSummary\">The channel name associated with the data point (as a lazy load function).</div></div>",4895:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4895\" class=\"NDPrototype NoParameterForm\">WirelessChannel::ChannelId channelId() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessChannel::ChannelId associated with the data point.</div></div>",4896:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4896\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> channelNumber() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the channel number associated with the data point (ch1 = 1, ch8 = 8), when applicable.&nbsp; Otherwise, this will return a 0 (for example, a Structural Health data point doesn\'t relate an actual channel on the Wireless Node, so this will be a 0).&nbsp; This number can be used to relate to the Node\'s WirelessChannel in the map returned from calling &lt;WirelessNode::channels&gt;().</div></div>",4897:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4897\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",4899:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a collection (vector) of WirelessDataPoints</div></div>"});