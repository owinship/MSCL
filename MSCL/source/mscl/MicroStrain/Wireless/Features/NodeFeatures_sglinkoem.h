/*******************************************************************************
Copyright(c) 2015 LORD Corporation. All rights reserved.

MIT Licensed. See the included LICENSE.txt for a copy of the full MIT License.
*******************************************************************************/
#pragma once

#include "NodeFeatures.h"

namespace mscl
{
	//Class: NodeFeatures_sglinkoem
	//	Contains information on features for the SG-Link-OEM node. Inherits from <NodeFeatures>.
	class NodeFeatures_sglinkoem : public NodeFeatures
	{
	private:
		NodeFeatures_sglinkoem();	//disabled default constructor

	public:
		virtual ~NodeFeatures_sglinkoem(){};

		//Constructor: NodeFeatures_sglinkoem
		//	Creates a NodeFeatures_sglinkoem object.
		NodeFeatures_sglinkoem(const NodeInfo& info);

		virtual bool supportsAutoBalance(uint8 channelNumber) const final;
	};
}