NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/WirelessNode_Impl.h",{3021:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3021\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation logic for a WirelessNode.&nbsp; Most WirelessNode commands call these commands.</div></div>",3023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3023\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessNode_Impl(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessNode_Impl object.</div></div>",3025:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3025\" class=\"NDPrototype NoParameterForm\">NodeAddress m_address</div><div class=\"TTSummary\">The address of the Node.</div></div>",3026:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3026\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The Node\'s parent BaseStation.</div></div>",3027:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3027\" class=\"NDPrototype NoParameterForm\">NodeEepromSettings m_eepromSettings</div><div class=\"TTSummary\">The eeprom settings to use for the NodeEeprom object.</div></div>",3028:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3028\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;WirelessProtocol&gt; m_protocol</div><div class=\"TTSummary\">The WirelessProtocol containing all of the protocol commands and info for this Node.</div></div>",3029:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3029\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEeprom&gt; m_eeprom</div><div class=\"TTSummary\">The NodeEeprom that handles reading and writing eeprom values with the Node and eeprom cache.</div></div>",3030:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3030\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEepromHelper&gt; m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper used for high level reads and writes on the Node.</div></div>",3031:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3031\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeFeatures&gt; m_features</div><div class=\"TTSummary\">The NodeFeatures containing the features for this Node.</div></div>",3033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3033\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;WirelessProtocol&gt; determineProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Determines the WirelessProtocol to use based on the Node\'s firmware version.</div></div>",3034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3034\" class=\"NDPrototype NoParameterForm\">NodeEeprom&amp; eeprom() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEeprom for this Node.</div></div>",3035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3035\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper&amp; eeHelper() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEepromHelper for this Node.</div></div>",3036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3036\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> NodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeFeatures for this Node.</div></div>",3037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3037\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessProtocol&amp; protocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessProtocol for this Node.&nbsp; Note: This requires communicating to the Node if creating the protocol for the first time.</div></div>",3038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3038\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the Node.</div></div>",3039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3039\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s parent Base Station, which will perform all communication with the Node.</div></div>",3040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3040\" class=\"NDPrototype NoParameterForm\">BaseStation&amp; getBaseStation()</div><div class=\"TTSummary\">Gets a reference to the BaseStation that is assigned to this Node.</div></div>",3041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3041\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the given BaseStation is the same BaseStation that is assigned to this Node.</div></div>",3042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3042\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useGroupRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables the use of group eeprom read when trying to read a single value (enabled by default).</div></div>",3043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3043\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the Node.</div></div>",3044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3044\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this Node (default of enabled).</div></div>",3045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3045\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this Node.</div></div>",3046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3046\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the Node.</div></div>",3047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3047\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the Node is believed to be on.&nbsp; If the frequency is unknown, it will be read from Eeprom.</div></div>",3048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3048\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the Node.</div></div>",3049:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3049\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessModels::NodeModel of the Node.</div></div>",3050:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3050\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the Node.</div></div>",3051:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3051\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::MicroControllerType of the Node.</div></div>",3052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3052\" class=\"NDPrototype NoParameterForm\">RadioFeatures radioFeatures() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RadioFeatures of the Node.</div></div>",3053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3053\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> dataStorageSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes available for data storage on the Node.</div></div>",3054:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3054\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the Node.</div></div>",3055:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3055\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given WirelessNodeConfig are ok to be written to the Node.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the Node.</div></div>",3056:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3056\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.</div></div>",3057:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3057\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getNumDatalogSessions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the number of datalog sessions that are currently stored on the Node.</div></div>",3058:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3058\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode getDefaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::DefaultMode that is currently set on the Node.</div></div>",3059:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3059\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the user inactivity timeout (in seconds) that is currently set on the Node.</div></div>",3060:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3060\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the check radio interval that is currently set on the Node.</div></div>",3061:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3061\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the Node.</div></div>",3062:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3062\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode getSamplingMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode that is currently set on the Node.</div></div>",3063:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3063\" class=\"NDPrototype NoParameterForm\">ChannelMask getActiveChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask currently set on the Node, representing which channels are enabled and disabled.</div></div>",3064:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3064\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate currently set on the Node.</div></div>",3065:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3065\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getNumSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of sweeps currently set on the Node, which affects the duration of sampling if unlimited duration is disabled, or the duration of each burst if the sampling mode is Sync Sampling Burst.</div></div>",3066:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3066\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getUnlimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not unlimited sampling duration is enabled on the Node.</div></div>",3067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3067\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat getDataFormat() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat that is currently set on the Node.</div></div>",3068:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3068\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod getDataCollectionMethod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod that is currently set on the Node, representing how the data will be collected.&nbsp; Note: this has no affect if the sampling mode is Armed Datalogging, as this mode only operates in &quot;log only&quot;.</div></div>",3069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3069\" class=\"NDPrototype NoParameterForm\">TimeSpan getTimeBetweenBursts() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time between each burst currently set on the Node.</div></div>",3070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3070\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lost beacon timeout, in minutes, currently set on the Node.</div></div>",3071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3071\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> getHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware gain of the specified ChannelMask.</div></div>",3072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3072\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getHardwareOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware offset of the specified ChannelMask currently set on the Node.</div></div>",3073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3073\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> getGaugeFactor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the gauge factor of the specified ChannelMask currently set on the Node.</div></div>",3074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3074\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LinearEquation getLinearEquation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the linear equation of the specified ChannelMask currently set on the Node.</div></div>",3075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3075\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_Unit getUnit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the unit of the specified ChannelMask currently set on the Node.</div></div>",3076:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3076\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_EquationType getEquationType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::CalCoef_EquationType of the specified ChannelMask currently set on the Node.</div></div>",3077:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3077\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime getFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the filter settling time of the specified ChannelMask.</div></div>",3078:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3078\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ThermocoupleType getThermocoupleType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::ThermocoupleType of the specified ChannelMask currently set on the Node.</div></div>",3079:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3079\" class=\"NDPrototype NoParameterForm\">FatigueOptions getFatigueOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the FatigueOptions currently set on the Node.</div></div>",3080:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3080\" class=\"NDPrototype NoParameterForm\">HistogramOptions getHistogramOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the HistogramOptions currently set on the Node.</div></div>",3081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3081\" class=\"NDPrototype NoParameterForm\">ActivitySense getActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the ActivitySense options currently set on the Node.</div></div>",3082:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3082\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> quickPing()</div><div class=\"TTSummary\">Performs a Quick Ping (Short Ping) command on the Node.</div></div>",3083:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3083\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> PingResponse ping()</div><div class=\"TTSummary\">Performs a Long Ping command on the Node to check the communication between the Base Station and the Node.</div></div>",3084:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3084\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sleep()</div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",3085:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3085\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the Node.&nbsp; Many configuration changes that are applied to the node do not take affect until the power is cycled.</div></div>",3086:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3086\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the Node.</div></div>",3087:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3087\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the Node.</div></div>",3088:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3088\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> SetToIdleStatus setToIdle()</div><div class=\"TTSummary\">Attempts to set the Node to the Idle state so that it can be communicated with (stops it sampling, wakes it up if asleep).</div></div>",3089:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3089\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> erase()</div><div class=\"TTSummary\">Erases all logged data on the Node.</div></div>",3090:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3090\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> startNonSyncSampling()</div><div class=\"TTSummary\">Starts the Node in Non-Synchronized Sampling Mode.</div></div>",3091:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3091\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearHistogram()</div><div class=\"TTSummary\">Clears the Histogram on the Node.</div></div>",3092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3092\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AutoBalanceResult autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">targetPercent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an Auto Balance command on a specified channel on the Node.</div></div>",3093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3093\" class=\"NDPrototype NoParameterForm\">AutoCalResult_shmLink autoCal_shmLink()</div><div class=\"TTSummary\">Performs automatic calibration for the SHM-Link Wireless Node.</div></div>",3094:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3094\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a uint16 from the given eeprom location of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3095:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3095\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value from the given EepromLocation of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3096:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3096\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a uint16 to the given eeprom location of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",3097:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3097\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a value to the given EepromLocation of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>"});