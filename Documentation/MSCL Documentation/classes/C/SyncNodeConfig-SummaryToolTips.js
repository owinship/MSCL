NDSummary.OnToolTipsLoaded("CClass:SyncNodeConfig",{2935:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2935\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNodeConfig</div></div></div><div class=\"TTSummary\">A helper class for reading and writing values used for Synchronized Sampling configuration</div></div>",2937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2937\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SyncNetworkInfo&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">networkInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNodeConfig object</div></div>",2939:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2939\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SyncNetworkInfo* m_networkInfo</div><div class=\"TTSummary\">The SyncNetworkInfo object containing information on the Node in the Sync Sampling network.</div></div>",2940:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2940\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper to use in reading and writing eeproms.</div></div>",2942:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2942\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the node.</div></div>",2943:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2943\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels()</div><div class=\"TTSummary\">Gets the ChannelMask of the node.</div></div>",2944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2944\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> activeChannelCount()</div><div class=\"TTSummary\">Gets the number of active channels on the node for use in Sync Sampling formulas.&nbsp; Note: this does not necessarily return the true active channel count, as some channels on some nodes don\'t count towards active channels in Sync Sampling formulas.</div></div>",2945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2945\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol commProtocol()</div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the Node.</div></div>",2946:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2946\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat dataFormat()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat of the node.</div></div>",2947:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2947\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod collectionMethod()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod of the node.</div></div>",2948:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2948\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sweepsPerSession()</div><div class=\"TTSummary\">Gets the number of sweeps per session of the node.</div></div>",2949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2949\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode samplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode ofthe node.</div></div>",2950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2950\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sensorDelay()</div><div class=\"TTSummary\">Gets the value stored in eeprom for the sensor delay of the node.</div></div>",2951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2951\" class=\"NDPrototype NoParameterForm\">TimeSpan timeBetweenBursts()</div><div class=\"TTSummary\">Gets the time between bursts of the node.</div></div>",2952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2952\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime filterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">channelNumber</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the WirelessTypes::SettlingTime of the node for a specific channel number.</div></div>",2953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2953\" class=\"NDPrototype NoParameterForm\">DataModeMask dataMode()</div><div class=\"TTSummary\">Gets the DataModeMask of the node.</div></div>",2954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2954\" class=\"NDPrototype NoParameterForm\">SampleRate derivedDataRate()</div><div class=\"TTSummary\">Gets the derived data rate as a SampleRate object.</div></div>",2955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2955\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelMask derivedChannelMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedCategory&nbsp;</td><td class=\"PName last\">category</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the channel mask for the specified WirelessTypes::DerivedCategory as a ChannelMask.</div></div>",2956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2956\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> diagnosticInterval()</div><div class=\"TTSummary\">Gets the diagnostic interval set on the Node.</div></div>",2957:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2957\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the transmissions per group to the node.</div></div>",2958:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2958\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the group size to the node.</div></div>",2959:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2959\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the TDMA address to the node.</div></div>",2960:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2960\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> retransmission(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">NodeRetransmission&nbsp;</td><td class=\"PName last\">reTx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the retransmission value to the node.</div></div>",2961:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2961\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> maxRetransPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxReTxPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the maximum retransmissions per burst to the node.</div></div>",2962:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2962\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyEepromChanges()</div><div class=\"TTSummary\">Resets the radio/power on the Node to apply eeprom changes that have been made.</div></div>"});