NDSummary.OnToolTipsLoaded("CClass:ActivitySense",{4007:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4007\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",4009:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4009\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_enabled</div><div class=\"TTSummary\">Whether Activity Sense is enabled or disabled.</div></div>",4010:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4010\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_activityThreshold</div><div class=\"TTSummary\">The activity threshold (in G\'s).</div></div>",4011:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4011\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_inactivityThreshold</div><div class=\"TTSummary\">The inactivity threshold (in G\'s).</div></div>",4012:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4012\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_activityTime</div><div class=\"TTSummary\">The activity time (in seconds).</div></div>",4013:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4013\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_inactivityTimeout</div><div class=\"TTSummary\">The inactivity timeout (in seconds).</div></div>",4015:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4015\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> enabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether Activity Sense is enabled or disabled in this options object.</div></div>",4016:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4016\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether Activity Sense is enabled or disabled in this options object.</div></div>",4017:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4017\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",4018:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4018\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the activity threshold value in this options object.&nbsp; This is the threshold the channel must exceed, for activityTime seconds to begin sampling.</div></div>",4019:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4019\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityThreshold() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",4020:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4020\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityThreshold(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">threshold</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the inactivity threshold value in this options object.&nbsp; This is the threshold the channel must drop below, for inactivityTimeout seconds to begin sampling.</div></div>",4021:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4021\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> activityTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, currently set in this options object.</div></div>",4022:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4022\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> activityTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the amount of time that activity must be seen above activityThreshold before the Node enters its sampling mode, in this options object.</div></div>",4023:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4023\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> inactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>",4024:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4024\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> inactivityTimeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the current amount of time that the Activity Sense mode runs without a value over the activityThreshold before it goes back into a low power mode, in this options object.</div></div>"});