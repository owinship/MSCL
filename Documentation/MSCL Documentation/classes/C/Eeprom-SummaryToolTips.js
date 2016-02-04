NDSummary.OnToolTipsLoaded("CClass:Eeprom",{2059:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2059\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Eeprom</div></div></div><div class=\"TTSummary\">The abstract base class for reading and writing to Wireless devices\' eeproms.</div></div>",2061:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a map of eeprom locations to eeprom values</div></div>",2063:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2063\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> Eeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",2065:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2065\" class=\"NDPrototype NoParameterForm\">EepromMap m_eepromCache</div><div class=\"TTSummary\">The EepromMap contianing all cached values that have previously been read from a device.</div></div>",2066:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2066\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useCache</div><div class=\"TTSummary\">Whether or not the cache should be used.</div></div>",2067:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2067\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_numRetries</div><div class=\"TTSummary\">The number of retries to use when reading and writing eeproms.</div></div>",2069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2069\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables use of the eeprom cache. Once disabled, all eeprom reads will go to the Node.</div></div>",2070:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2070\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearCache()</div><div class=\"TTSummary\">Clears the entire eeprom cache.</div></div>",2071:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2071\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> clearCacheLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Clears a specific location from the eeprom cache, if it exists.</div></div>",2072:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2072\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setNumRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">retries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retries to use when reading and writing eeproms.&nbsp; By default, this configuration is set to 0, meaning no retries are performed.</div></div>",2073:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2073\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getNumRetries()</div><div class=\"TTSummary\">Gets the number of retries currently set for reading and writing eeproms.</div></div>",2074:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2074\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> readCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read a value from the eeprom cache.</div></div>",2075:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2075\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a value to the eeprom cache at the given location, or updates it if a value for that location already exists.</div></div>",2076:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2076\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from a device.&nbsp; Any values that are read from the device will be updated in the cache.</div></div>",2077:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2077\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",2078:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2078\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",2079:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2079\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",2080:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2080\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",2081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2081\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual float</span> readEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a float.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",2082:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2082\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint32</span> readEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read 2 eeprom values from a device and build them into a uint32.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",2083:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2083\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int16</span> readEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from a device as a signed int16.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the device.</div></div>",2084:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2084\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_float(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a float.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",2085:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2085\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_uint32(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write 2 eeprom values to a device as a uint32.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>",2086:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2086\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom_int16(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to a device from a signed int16.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the device and this function will have no affect.</div></div>"});