/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#include "stdafx.h"
#include "NodeFeatures_dvrtlink.h"
#include "mscl/MicroStrain/Wireless/Configuration/NodeEepromMap.h"
#include "mscl/Utils.h"

namespace mscl
{
	NodeFeatures_dvrtlink::NodeFeatures_dvrtlink(const NodeInfo& info):
		NodeFeatures(info)
	{
		addCalCoeffChannelGroup(3, NodeEepromMap::CH_ACTION_SLOPE_3, NodeEepromMap::CH_ACTION_ID_3);
		addCalCoeffChannelGroup(4, NodeEepromMap::CH_ACTION_SLOPE_4, NodeEepromMap::CH_ACTION_ID_4);

		//Channels
		m_channels.emplace_back(3, WirelessChannel::channel_3, WirelessTypes::chType_temperature);	//temperature
		m_channels.emplace_back(4, WirelessChannel::channel_4, WirelessTypes::chType_displacement);	//displacement
	}
}